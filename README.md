# Javascript-Notes

## Pure JavaScript Project Initialization

### Step 1: Create a repository in Github and clone it to local

### Step 2: Format using prettier

1. Install prettier extention or use npm install

```Bash
npm install --global prettier
```

2. Create a file named .prettierrc
3. Create rules in that file such as:

```JSON
{
  "printWidth": 100,         // Line wrap at 100 characters
  "tabWidth": 2,             // Indent using 2 spaces
  "useTabs": false,          // Use spaces instead of tabs
  "semi": true,              // End lines with semicolons
  "singleQuote": true,       // Use single quotes instead of double quotes
  "htmlWhitespaceSensitivity": "ignore",  // Ignore whitespace in HTML
  "trailingComma": "es5",    // Add trailing commas in objects and arrays
  "bracketSpacing": true     // Space between brackets in objects
}
```

4. Format all HTML, CSS, JavaScript files:

```Bash
prettier --write "**/*.{html,css,js,json}"
```
