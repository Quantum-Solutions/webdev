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

This project is using Firebase as a database.

The `DatabaseHelper` (`Helpers/DatabaseHelper.cs`) class acts as a layer between the application and the database. This class is used to retrieve data from the database, store it in the necessary model, and return that back to the calling method.

Methods:

- `GetUser(string userId)` takes the ID of a user and retrieves that user's information from the database, or `null` if the user doesn't exist. If the user does exist, it populates the `User` model and returns it.

### Setting up Firebase for use with C#

The following code sets up the database for use with C#:

```C#
string path = AppDomain.CurrentDomain.BaseDirectory + "wil-dev-firebase-adminsdk-strge-722cdc9511.json";

Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", path);
```

### Reading data from Firebase

The following code is an example of how to retrieve a user's first name from the database, given their user ID (which is the ID of the collection):

```C#
// "wil-dev" is the name of the Firebase project
FirestoreDb db = FirestoreDb.Create("wil-dev");

// The ID of the document is the ID of the user
DocumentReference doc = db.Collection("users").Document("<user-id>");
DocumentSnapshot snapshot = await doc.GetSnapshotAsync();

// Get the user's first name from the database
string firstName = snapshot.GetValue<string>("first_name");
```

More information on how to use Firebase with C# can be found [in the docs](https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Firestore/)

### Note

There is no need for migrations in this project since we are using Firebase and the database has already been setup in the [Firebase console](https://console.firebase.google.com)

## Useful commands

If you are using Visual Studio Code as your text editor, the following commands are useful for the development of the web application:

```plain
dotnet restore                  - installs the packages specified in the "webdev.csproj" file
dotnet run                      - run the web application and starts the web server (by default at https://localhost:5001)
```
