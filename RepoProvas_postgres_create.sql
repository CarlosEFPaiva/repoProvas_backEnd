CREATE TABLE "tests" (
	"id" serial NOT NULL,
	"year" integer NOT NULL,
	"semester" integer NOT NULL,
	"category_id" integer NOT NULL,
	"professor_and_subject_id" integer NOT NULL,
	"link" varchar(2048) NOT NULL UNIQUE,
	UNIQUE ("year", "semester", "category_id", "professor_and_subject_id"),
	CONSTRAINT "tests_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	"semester_id" integer NOT NULL,
	CONSTRAINT "subject_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "professors" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "professors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "professors_and_subjects" (
	"id" serial NOT NULL,
	"professor_id" integer NOT NULL,
	"subject_id" integer NOT NULL,
	UNIQUE ("professor_id", "subject_id"),
	CONSTRAINT "professors_and_subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "semesters" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "semesters_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "tests" ADD CONSTRAINT "tests_fk0" FOREIGN KEY ("category_id") REFERENCES "categories"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("professor_and_subject_id") REFERENCES "professors_and_subjects"("id");

ALTER TABLE "subject" ADD CONSTRAINT "subject_fk0" FOREIGN KEY ("semester_id") REFERENCES "semesters"("id");

ALTER TABLE "professors_and_subjects" ADD CONSTRAINT "professors_and_subjects_fk0" FOREIGN KEY ("professor_id") REFERENCES "professors"("id");
ALTER TABLE "professors_and_subjects" ADD CONSTRAINT "professors_and_subjects_fk1" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");
