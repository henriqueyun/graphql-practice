-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "game" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "lastUpdateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rating" DOUBLE PRECISION NOT NULL,
    "finalObjective" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
