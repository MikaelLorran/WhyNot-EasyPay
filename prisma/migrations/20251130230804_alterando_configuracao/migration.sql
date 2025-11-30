/*
  Warnings:

  - You are about to drop the column `frequenciaVerificacao` on the `Configuracao` table. All the data in the column will be lost.
  - Added the required column `diaMes` to the `Configuracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diaSemana` to the `Configuracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora` to the `Configuracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mes` to the `Configuracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minuto` to the `Configuracao` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Configuracao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diasAntesVencimento" INTEGER NOT NULL,
    "diasAposVencimento" INTEGER NOT NULL,
    "minuto" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "diaMes" TEXT NOT NULL,
    "mes" TEXT NOT NULL,
    "diaSemana" TEXT NOT NULL
);
INSERT INTO "new_Configuracao" ("diasAntesVencimento", "diasAposVencimento", "id") SELECT "diasAntesVencimento", "diasAposVencimento", "id" FROM "Configuracao";
DROP TABLE "Configuracao";
ALTER TABLE "new_Configuracao" RENAME TO "Configuracao";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
