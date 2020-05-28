CREATE TABLE "public"."Users" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(80) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  mobile VARCHAR(13),
  picture  TEXT,
  about TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE "public"."Events"(
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  location TEXT NOT NULL,
  published BOOLEAN NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  host INTEGER NOT NULL,
  FOREIGN KEY ("host") REFERENCES "public"."Users"(id)
);

CREATE TABLE "public"."EventAttendees"(
  id SERIAL PRIMARY KEY NOT NULL,
  "userId" INTEGER NOT NULL,
  FOREIGN KEY ("userId") REFERENCES "public"."Users"(id),
  "eventId" INTEGER NOT NULL,
  FOREIGN KEY ("eventId") REFERENCES "public"."Events"(id)
);