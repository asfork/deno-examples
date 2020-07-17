import { parseDate, parseDateTime } from 'https://deno.land/std/datetime/mod.ts'

parseDate("20-01-2019", "dd-mm-yyyy");
parseDate("2019-01-20", "yyyy-mm-dd");

parseDateTime("01-20-2019 16:34", "mm-dd-yyyy hh:mm");
parseDateTime("16:34 01-20-2019", "hh:mm mm-dd-yyyy");
