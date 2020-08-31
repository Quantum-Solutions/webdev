using System.Collections.Generic;

namespace webdev.Utils
{
    public class CollectionUtils
    {
        public static Dictionary<string, object> ConvertKeysToTitleCase(Dictionary<string, object> data)
        {
            var title_case_data = new Dictionary<string, object>();

            // Convert all keys in the dictionary from snake_case to TitleCase
            foreach (var keyValuePair in data)
            {
                string titleCaseKey = StringUtils.SnakeCaseToTitleCase(keyValuePair.Key);

                title_case_data[titleCaseKey] = keyValuePair.Value;
            }

            return title_case_data;
        }
    }
}