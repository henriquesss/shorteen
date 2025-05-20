CREATE TABLE `urls_table` (
	`id` varchar(255) NOT NULL,
	`original_url` varchar(255) NOT NULL,
	`short_url` varchar(255) NOT NULL,
	`created_at` date NOT NULL DEFAULT '2025-05-19',
	CONSTRAINT `urls_table_id` PRIMARY KEY(`id`),
	CONSTRAINT `urls_table_id_unique` UNIQUE(`id`),
	CONSTRAINT `urls_table_original_url_unique` UNIQUE(`original_url`),
	CONSTRAINT `urls_table_short_url_unique` UNIQUE(`short_url`)
);
