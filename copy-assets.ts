import * as shell from "shelljs";
// Copy all the view templates
shell.cp("-R", "./core/views", "./dist");
// Copy all the public assets
shell.cp("-R", "./core/public", "./dist");