-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "Users" (
    "UserID" int   NOT NULL,
    "UserName" string   NOT NULL,
    "Email" TEXT   NOT NULL,
    CONSTRAINT "pk_Users" PRIMARY KEY (
        "UserID"
     ),
    CONSTRAINT "uc_Users_Email" UNIQUE (
        "Email"
    )
);

CREATE TABLE "Events" (
    "EventID" int   NOT NULL,
    "Title" VARCHAR(100)   NOT NULL,
    "Description" TEXT   NOT NULL,
    "Date" DATE   NOT NULL,
    "Location" VARCHAR(100)   NOT NULL,
    CONSTRAINT "pk_Events" PRIMARY KEY (
        "EventID"
     )
);

CREATE TABLE "ContactMessages" (
    "MessageID" Int   NOT NULL,
    "UserID" Int   NOT NULL,
    "Email" VARCHAR(100)   NOT NULL,
    "Message" TEXT   NOT NULL,
    "ReceivedDate" DATE   NOT NULL,
    CONSTRAINT "pk_ContactMessages" PRIMARY KEY (
        "MessageID"
     )
);

CREATE TABLE "Mixes" (
    "TrackID" int   NOT NULL,
    "Title" TEXT   NOT NULL,
    "PlaylistID" Int   NOT NULL,
    "Playlist_Title" TEXT   NOT NULL,
    "Release_date" DATE   NOT NULL,
    "Genre" TEXT   NOT NULL,
    CONSTRAINT "pk_Mixes" PRIMARY KEY (
        "TrackID"
     )
);

CREATE TABLE "Merchandise" (
    "MerchID" int,   NOT NULL,
    "Name" VARCHAR(100),   NOT NULL,
    "Description" TEXT,   NOT NULL,
    "Price" DECIMAL   NOT NULL,
    "Size" VARCHAR(50),   NOT NULL,
    "Image_URL" VARCHAR(255),   NOT NULL,
    "StockQuantity" int,   NOT NULL,
    "Category" VARCHAR(100)   NOT NULL,
    CONSTRAINT "pk_Merchandise" PRIMARY KEY (
        "MerchID"
     )
);

CREATE TABLE "Orders" (
    "OrdersID" int   NOT NULL,
    "MerchID" int   NOT NULL,
    CONSTRAINT "pk_Orders" PRIMARY KEY (
        "OrdersID"
     )
);

ALTER TABLE "ContactMessages" ADD CONSTRAINT "fk_ContactMessages_UserID" FOREIGN KEY("UserID")
REFERENCES "Users" ("UserID");

ALTER TABLE "Orders" ADD CONSTRAINT "fk_Orders_MerchID" FOREIGN KEY("MerchID")
REFERENCES "Merchandise" ("MerchID");

CREATE INDEX "idx_Users_UserName"
ON "Users" ("UserName");

