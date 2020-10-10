CREATE TABLE dragon(
    id              SERIAL      PRIMARY KEY,
    birhtdate       TIMESTAMP   NOT NULL,
    nickname        VARCHAR(64),
    "generationId"    INTEGER, 
    FOREIGN KEY ("generationId") REFERENCES generation(id)
);