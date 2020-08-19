using Google.Cloud.Firestore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
using System.Threading.Tasks;
using webdev.Helpers;
using webdev.Models;

namespace webdev.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DatabaseHelper _databaseHelper;

        string user;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
            _databaseHelper = DatabaseHelper.GetInstance();
        }

        public async Task<IActionResult> Index()
        {
            User user = await _databaseHelper.GetUser("swsY2dg2OjeCQ9z69NNykWgrwAC3");

            ViewData["stuff"] = user.FirstName;

            return View();
        }

        private async void FindUser(string userId)
        {
            var c = FirestoreDb.Create("wil-dev");

            DocumentReference doc = c.Collection("users").Document(userId);
            DocumentSnapshot snapshot = await doc.GetSnapshotAsync();

            string firstName = snapshot.GetValue<string>("first_name");

            user = firstName;
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
