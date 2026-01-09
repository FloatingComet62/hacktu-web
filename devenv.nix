{ pkgs, lib, config, inputs, ... }:

{
  packages = [ pkgs.git pkgs.nodejs ];
  languages.typescript.enable = true;
  enterShell = ''
    node --version
    git --version # Use packages
  '';
  tasks = {
    "proj:setup".exec = "npm ci";
    "devenv:enterShell".after = [ "proj:setup" ];
  };
}
