CREATE DATABASE sic_backend;

CREATE TABLE users(
  id serial PRIMARY KEY,
  first_name VARCHAR (50) NOT NULL,
  surname VARCHAR (50) NOT NULL,
  password VARCHAR (255) NOT NULL,
  email VARCHAR (255) UNIQUE NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT(NOW()),
  last_login TIMESTAMP,
  public_id VARCHAR(255) NOT NULL DEFAULT gen_random_uuid()
);

-- SETUP session TABLE WITH CONSTRAINTS
CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
) WITH (OIDS = FALSE);
-- (CONSTRAINTS)
ALTER TABLE
  "session"
ADD
  CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");