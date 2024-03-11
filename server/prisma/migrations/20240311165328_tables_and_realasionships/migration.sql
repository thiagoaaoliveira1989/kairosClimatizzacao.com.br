-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactForm" (
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "type" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255),
    "phoneNumber" VARCHAR(20),
    "subject" VARCHAR(255),
    "message" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndividualClient" (
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "contractNumber" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IndividualClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CorporateClient" (
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "cnpj" VARCHAR(18) NOT NULL,
    "stateRegistration" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "contractNumber" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CorporateClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitSchedule" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "landmark" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contactFormId" BIGINT NOT NULL,

    CONSTRAINT "VisitSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechnicalSupportTicket" (
    "id" BIGSERIAL NOT NULL,
    "contractNumber" VARCHAR(20) NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contactFormId" BIGINT,

    CONSTRAINT "TechnicalSupportTicket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "idx_userId" ON "ContactForm"("userId");

-- CreateIndex
CREATE INDEX "idx_type" ON "ContactForm"("type");

-- CreateIndex
CREATE UNIQUE INDEX "IndividualClient_userId_key" ON "IndividualClient"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "IndividualClient_cpf_key" ON "IndividualClient"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "IndividualClient_contractNumber_key" ON "IndividualClient"("contractNumber");

-- CreateIndex
CREATE INDEX "idx_userId_IndividualClient" ON "IndividualClient"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CorporateClient_userId_key" ON "CorporateClient"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CorporateClient_cnpj_key" ON "CorporateClient"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "CorporateClient_contractNumber_key" ON "CorporateClient"("contractNumber");

-- CreateIndex
CREATE INDEX "idx_userId_CorporateClient" ON "CorporateClient"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "VisitSchedule_contactFormId_key" ON "VisitSchedule"("contactFormId");

-- AddForeignKey
ALTER TABLE "ContactForm" ADD CONSTRAINT "contactForms_user" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactForm" ADD CONSTRAINT "contactForms_individualClient" FOREIGN KEY ("userId") REFERENCES "IndividualClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactForm" ADD CONSTRAINT "contactForms_corporateClient" FOREIGN KEY ("userId") REFERENCES "CorporateClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndividualClient" ADD CONSTRAINT "IndividualClient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporateClient" ADD CONSTRAINT "CorporateClient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitSchedule" ADD CONSTRAINT "VisitSchedule_contactFormId_fkey" FOREIGN KEY ("contactFormId") REFERENCES "ContactForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicalSupportTicket" ADD CONSTRAINT "TechnicalSupportTicket_contactFormId_fkey" FOREIGN KEY ("contactFormId") REFERENCES "ContactForm"("id") ON DELETE SET NULL ON UPDATE CASCADE;
