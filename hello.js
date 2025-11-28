const prompt = require('prompt-sync')();

/**
 * Interactive Hello World Application
 * Prompts user for their name and displays a personalized greeting
 */

/**
 * Validates if the input is a valid name (contains only letters, spaces, hyphens, and apostrophes)
 * @param {string} name - The name to validate
 * @returns {boolean} true if valid, false otherwise
 */
function isValidName(name) {
  const nameRegex = /^[A-Za-z\s\-\']+$/;
  return nameRegex.test(name.trim()) && name.trim().length > 0;
}

/**
 * Prompts user for their name with validation
 * @returns {string} A valid name string
 */
function getUserName() {
  let name;

  do {
    name = prompt('What is your name? ').trim();

    if (!isValidName(name)) {
      console.log(
        '❌ Invalid name. Please enter a valid name (letters, spaces, hyphens, and apostrophes only).'
      );
    }
  } while (!isValidName(name));

  return name;
}

/**
 * Creates a personalized greeting message
 * @param {string} name - User's name
 * @returns {string} Formatted greeting string
 */
function createGreeting(name) {
  return `Hello, ${name}! Welcome to the interactive world! 🌟`;
}

/**
 * Main application function
 */
function main() {
  console.log('🎉 Welcome to the Interactive Hello World Application!\n');

  try {
    // Get user's name
    const name = getUserName();

    // Generate and display greeting
    const greeting = createGreeting(name);

    console.log('\n✨ Your personalized greeting:');
    console.log(`👋 ${greeting}`);
    console.log('\nThank you for using the application! 🚀');
  } catch (error) {
    console.error('❌ An error occurred:', error.message);
    process.exit(1);
  }
}

// Run the application
main();
