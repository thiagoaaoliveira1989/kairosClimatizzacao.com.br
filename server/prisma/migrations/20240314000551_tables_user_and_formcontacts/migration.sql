-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactForm" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndividualClient" (
    "id" SERIAL NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "contractNumber" VARCHAR(20) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IndividualClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CorporateClient" (
    "id" SERIAL NOT NULL,
    "cnpj" VARCHAR(18) NOT NULL,
    "stateRegistration" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "contractNumber" VARCHAR(20) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CorporateClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitSchedule" (
    "id" SERIAL NOT NULL,
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

    CONSTRAINT "VisitSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechnicalSupportTicket" (
    "id" SERIAL NOT NULL,
    "contractNumber" VARCHAR(20) NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contractNumberIndivClient" TEXT,
    "contractNumberCorpClient" TEXT,

    CONSTRAINT "TechnicalSupportTicket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "IndividualClient_cpf_key" ON "IndividualClient"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "IndividualClient_contractNumber_key" ON "IndividualClient"("contractNumber");

-- CreateIndex
CREATE UNIQUE INDEX "IndividualClient_userId_key" ON "IndividualClient"("userId");

-- CreateIndex
CREATE INDEX "idx_userId_IndividualClient" ON "IndividualClient"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CorporateClient_cnpj_key" ON "CorporateClient"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "CorporateClient_contractNumber_key" ON "CorporateClient"("contractNumber");

-- CreateIndex
CREATE UNIQUE INDEX "CorporateClient_userId_key" ON "CorporateClient"("userId");

-- CreateIndex
CREATE INDEX "idx_userId_CorporateClient" ON "CorporateClient"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "TechnicalSupportTicket_contractNumberIndivClient_key" ON "TechnicalSupportTicket"("contractNumberIndivClient");

-- CreateIndex
CREATE UNIQUE INDEX "TechnicalSupportTicket_contractNumberCorpClient_key" ON "TechnicalSupportTicket"("contractNumberCorpClient");

-- AddForeignKey
ALTER TABLE "IndividualClient" ADD CONSTRAINT "IndividualClient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporateClient" ADD CONSTRAINT "CorporateClient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicalSupportTicket" ADD CONSTRAINT "TechnicalSupportTicket_contractNumberIndivClient_fkey" FOREIGN KEY ("contractNumberIndivClient") REFERENCES "IndividualClient"("contractNumber") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicalSupportTicket" ADD CONSTRAINT "TechnicalSupportTicket_contractNumberCorpClient_fkey" FOREIGN KEY ("contractNumberCorpClient") REFERENCES "CorporateClient"("contractNumber") ON DELETE SET NULL ON UPDATE CASCADE;
