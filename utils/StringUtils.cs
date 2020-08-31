using System.Globalization;

namespace webdev.utils
{
    public class StringUtils
    {
        public static string SnakeCaseToTitleCase(string s)
        {
            var textInfo = new CultureInfo("en-US", false).TextInfo;

            s = s.Replace("_", " ");
            s = textInfo.ToTitleCase(s);
            s = s.Replace(" ", "");

            return s;
        }
    }
}