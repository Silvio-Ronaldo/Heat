-- CreateTable
CREATE TABLE "rooms" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "primary_color" TEXT NOT NULL,
    "secondary_color" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
