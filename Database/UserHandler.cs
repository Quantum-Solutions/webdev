using Google.Cloud.Firestore;
using System.Threading.Tasks;
using webdev.Helpers;
using webdev.Models;

namespace webdev.Database
{
    public class UserHandler
    {
        private FirestoreDb _db;

        public UserHandler(FirestoreDb db)
        {
            _db = db;
        }

        public async Task<User> Get(string userId)
        {
            DocumentReference doc = _db.Collection("users").Document(userId);
            DocumentSnapshot snapshot = await doc.GetSnapshotAsync();

            if (!snapshot.Exists)
                return null;

            var user = new User();

            DatabaseHelper.MakeData(user, snapshot);

            return user;
        }
    }
}