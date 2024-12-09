-- CreateTable
CREATE TABLE "Class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "tier" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "legacyItem" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "effects" TEXT,
    "rarityId" INTEGER NOT NULL,
    "restrictionId" INTEGER NOT NULL,
    "source" TEXT,
    "sourceShort" TEXT,
    CONSTRAINT "Item_rarityId_fkey" FOREIGN KEY ("rarityId") REFERENCES "ItemRarity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Item_restrictionId_fkey" FOREIGN KEY ("restrictionId") REFERENCES "ItemRestriction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ItemRestriction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ItemRarity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ItemRecipes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ItemRecipes_A_fkey" FOREIGN KEY ("A") REFERENCES "Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ItemRecipes_B_fkey" FOREIGN KEY ("B") REFERENCES "Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_id_key" ON "Item"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ItemRarity_id_key" ON "ItemRarity"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemRecipes_AB_unique" ON "_ItemRecipes"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemRecipes_B_index" ON "_ItemRecipes"("B");
