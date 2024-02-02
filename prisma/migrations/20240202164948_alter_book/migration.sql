/*
  Warnings:

  - You are about to alter the column `quantity` on the `Book` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "editorialId" INTEGER NOT NULL,
    "quantity" INTEGER,
    "publicationDate" DATETIME NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "isBestSeller" BOOLEAN NOT NULL,
    "image" TEXT,
    CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Book_editorialId_fkey" FOREIGN KEY ("editorialId") REFERENCES "Editorial" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Book_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("authorId", "categoryId", "editorialId", "id", "image", "isBestSeller", "publicationDate", "quantity", "title") SELECT "authorId", "categoryId", "editorialId", "id", "image", "isBestSeller", "publicationDate", "quantity", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
