-- CreateTable
CREATE TABLE "Intern" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "salary" DECIMAL(65,30) NOT NULL,
    "role" TEXT NOT NULL,
    "onWork" BOOLEAN NOT NULL,
    "getInHour" TEXT NOT NULL,
    "getOutHour" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "delayed" INTEGER NOT NULL,
    "absent" INTEGER NOT NULL,
    "rfIdCard" TEXT NOT NULL,

    CONSTRAINT "Intern_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "houseNumber" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "internId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "internsIdScore" JSONB NOT NULL,
    "internId" TEXT,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Intern_cpf_key" ON "Intern"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Intern_email_key" ON "Intern"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Address_internId_key" ON "Address"("internId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_internId_fkey" FOREIGN KEY ("internId") REFERENCES "Intern"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_internId_fkey" FOREIGN KEY ("internId") REFERENCES "Intern"("id") ON DELETE SET NULL ON UPDATE CASCADE;
