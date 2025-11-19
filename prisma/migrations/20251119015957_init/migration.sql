/*
  Warnings:

  - Made the column `alunoId` on table `Boleto` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Boleto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "vencimento" DATETIME NOT NULL,
    "dataPagamento" DATETIME,
    "finalizado" BOOLEAN NOT NULL DEFAULT false,
    "alunoId" INTEGER NOT NULL,
    CONSTRAINT "Boleto_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Boleto" ("alunoId", "dataPagamento", "finalizado", "id", "titulo", "valor", "vencimento") SELECT "alunoId", "dataPagamento", "finalizado", "id", "titulo", "valor", "vencimento" FROM "Boleto";
DROP TABLE "Boleto";
ALTER TABLE "new_Boleto" RENAME TO "Boleto";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
