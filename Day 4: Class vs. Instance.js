function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  this.amIOld = function() {
    // Do some computations in here and print out the correct statement to the console
    if (initialAge < 0) {
      console.log('Age is not valid, setting age to 0.\n' + 'You are young.')
      initialAge = 0
    }
    else {
      initialAge < 13 ? console.log('You are young.') :
        initialAge >= 13 && initialAge < 18 ? console.log('You are a teenager.') :
          console.log('You are old.')
    }
  };
  this.yearPasses = function() {
    // Increment the age of the person in here
    initialAge++
  };
}