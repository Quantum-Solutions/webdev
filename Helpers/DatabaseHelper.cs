using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using webdev.Database;
using webdev.Utils;

namespace webdev.Helpers
{
    public class DatabaseHelper
    {
        private const string PROJECT_ID = "wil-dev";
        private const string USERS_COLLECTION = "users";
        private FirestoreDb db;
        private static DatabaseHelper databaseHelper;

        public UserHandler User { get; set; }

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

            User = new UserHandler(db);
        }

        private async Task<DocumentSnapshot> GetDocumentSnapshot(string collection, string documentId)
        {
            DocumentReference doc = db.Collection(collection).Document(documentId);

            return await doc.GetSnapshotAsync();
        }

        // Takes a DocumentSnapshot and populates the class object `_class`' properties with the data inside the DocumentSnapshot
        public static void MakeData(object _class, DocumentSnapshot snapshot)
        {
            if (_class == null)
                return;

            Dictionary<string, object> snake_case_data = snapshot.ToDictionary(); // A dictionary with keys following the SnakeCase naming convention, as returned from the database
            Dictionary<string, object> title_case_data = CollectionUtils.ConvertKeysToTitleCase(snake_case_data); // A dictionary with keys following the TitleCase naming convention

            object value;

            foreach (var propertyInfo in _class.GetType().GetProperties())
            {
                if (title_case_data.TryGetValue(propertyInfo.Name, out value))
                {
                    propertyInfo.SetValue(_class, value);
                }
            }
        }
    }
}