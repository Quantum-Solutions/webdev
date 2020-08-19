# WIL Web Development

## Description

This is the official repo for the Quantum Academia web application, developed by Quantum Solutions, for an online registration system for uiversities.

## Prerequisties

- [.NET Core 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1)
- Any IDE or text editor, such as [Visual Studio](https://visualstudio.microsoft.com) or [Visual Studio Code](https://code.visualstudio.com)

## Getting Started

To get started with development on this repo, run the following commands:

1. `git clone https://github.com/Typicallunchbox/WIL-WebDev`

2. `cd WIL-WebDev`

3. `dotnet restore`

4. `dotnet run`

## Database

Firebase is being used as the database for this project

### Note

There is no need for migrations in this projects since we are using Firebase and the database has already been setup in the [Firebase console](https://console.firebase.google.com)

## Useful commands

If you are using Visual Studio Code as your text editor, the following commands are useful for the development of the web application:

```plain
dotnet restore                  - installs the packages specified in the "webdev.csproj" file
dotnet run                      - run the web application and starts the web server (by default at https://localhost:5001)
```
