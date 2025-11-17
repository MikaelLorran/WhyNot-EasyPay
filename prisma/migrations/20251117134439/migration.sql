/*
  Warnings:

  - You are about to drop the `Boletos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Boletos";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Boleto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "vencimento" DATETIME NOT NULL,
    "dataPagamento" DATETIME,
    "finalizado" BOOLEAN NOT NULL DEFAULT false,
    "alunoId" INTEGER,
    CONSTRAINT "Boleto_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
