CREATE TABLE `activity` (
	`id` text PRIMARY KEY NOT NULL,
	`student_id` text,
	`actor` text NOT NULL,
	`event` text NOT NULL,
	`detail` text NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `activity_created` ON `activity` (`created_at`);--> statement-breakpoint
CREATE TABLE `attempts` (
	`id` text PRIMARY KEY NOT NULL,
	`student_id` text NOT NULL,
	`name` text NOT NULL,
	`set_number` integer,
	`mock` integer NOT NULL,
	`question_ids` text NOT NULL,
	`answers` text DEFAULT '[]' NOT NULL,
	`current_index` integer DEFAULT 0 NOT NULL,
	`status` text DEFAULT 'started' NOT NULL,
	`started_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`deadline` integer,
	`finished_at` integer,
	`correct` integer,
	`total` integer NOT NULL,
	`percent` integer,
	FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `attempts_student_started` ON `attempts` (`student_id`,`started_at`);--> statement-breakpoint
CREATE TABLE `rate_limits` (
	`key` text PRIMARY KEY NOT NULL,
	`count` integer NOT NULL,
	`reset_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`token_hash` text PRIMARY KEY NOT NULL,
	`student_id` text NOT NULL,
	`expires_at` integer NOT NULL,
	FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `sessions_student` ON `sessions` (`student_id`);--> statement-breakpoint
CREATE TABLE `students` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`name` text NOT NULL,
	`password_hash` text NOT NULL,
	`salt` text NOT NULL,
	`must_change` integer DEFAULT 1 NOT NULL,
	`active` integer DEFAULT 1 NOT NULL,
	`created_at` integer NOT NULL,
	`last_login` integer,
	`failures` integer DEFAULT 0 NOT NULL,
	`locked_until` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `students_username` ON `students` (`username`);