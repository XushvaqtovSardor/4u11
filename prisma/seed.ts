import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';

async function main() {
  const pool = new Pool({
    connectionString: 'postgresql://postgres:postgres@localhost:5432/crm_2',
  });

  const hashedPassword = await bcrypt.hash('admin10', 10);

  const result = await pool.query(
    `INSERT INTO "Staff" (username, password, "fullName", phone, role, status, "createdAt", "updatedAt")
     VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
     ON CONFLICT (username) DO UPDATE SET password = $2
     RETURNING *`,
    [
      'superadmin',
      hashedPassword,
      'Super Admin',
      '+998901234567',
      'SuperAdmin',
      'ACTIVE',
    ],
  );

  console.log('SuperAdmin created:', result.rows[0]);
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
