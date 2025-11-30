-- CreateTable
CREATE TABLE "Configuracao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diasAntesVencimento" INTEGER NOT NULL,
    "diasAposVencimento" INTEGER NOT NULL,
    "frequenciaVerificacao" TEXT NOT NULL
);
