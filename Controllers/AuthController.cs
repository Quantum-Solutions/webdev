using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using webdev.Helpers;

namespace webdev.Controllers
{
    public class AuthController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DatabaseHelper _databaseHelper;
        public AuthController(ILogger<HomeController> logger)
        {
            _logger = logger;
            _databaseHelper = DatabaseHelper.GetInstance();
        }

        [Route("/login")]
        public IActionResult Login()
        {
            return View();
        }

        [Route("/register")]
        public IActionResult Register()
        {
            return View();
        }
    }
}
