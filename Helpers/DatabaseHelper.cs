using Google.Cloud.Firestore;
using System;
using System.Diagnostics;
using System.Threading.Tasks;
using webdev.Models;

namespace webdev.Helpers
{
    public class DatabaseHelper
    {
        private const string PROJECT_ID = "wil-dev";
        private const string USERS_COLLECTION = "users";
        private FirestoreDb db;
        private static DatabaseHelper databaseHelper;

        public static DatabaseHelper GetInstance()
        {
            if (databaseHelper == null)
            {
                databaseHelper = new DatabaseHelper();
                databaseHelper.SetupDatabase();
            }

            return databaseHelper;
        }

        private void SetupDatabase()
        {
            string path = AppDomain.CurrentDomain.BaseDirectory + "wil-dev-firebase-adminsdk-strge-722cdc9511.json";

            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", path);
            
            db = FirestoreDb.Create(PROJECT_ID);
        }

        private async Task<DocumentSnapshot> GetDocumentSnapshot(string collection, string documentId)
        {
            DocumentReference doc = db.Collection(collection).Document(documentId);

            return await doc.GetSnapshotAsync();
        }

        public async Task<User> GetUser(string userId)
        {
            DocumentSnapshot snapshot = await GetDocumentSnapshot(USERS_COLLECTION, userId);

            if (!snapshot.Exists)
                return null;

            var user = new User()
            {
                Id = userId,
                FirstName = snapshot.GetValue<string>("first_name"),
                LastName = snapshot.GetValue<string>("last_name"),
                UserType = snapshot.GetValue<string>("user_type")
            };

            return user;
        }
    }
}