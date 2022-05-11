async function analyzeText(text) {
    const language = require('@google-cloud/language');

    const client = new language.LanguageServiceClient();

    // The text to analyze
    //const text = 'Sam seems tired, but Annie is energic.';

    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    const [result] = await client.analyzeSentiment({ document });

    const sentiment = result.documentSentiment;
    console.log('Document sentiment:');
    console.log(`  Score: ${sentiment.score}`);
    console.log(`  Magnitude: ${sentiment.magnitude}`);

    const sentences = result.sentences;
    sentences.forEach(sentence => {
        console.log(`Sentence: ${sentence.text.content}`);
        console.log(`  Score: ${sentence.sentiment.score}`);
        console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
    });

    console.log("SENTIMENT: " + sentiment.magnitude)
    return sentiment.score;
    
}

async function analyzeSyntax(text) {
    const language = require('@google-cloud/language');
  
    const client = new language.LanguageServiceClient();
  
    const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
    const encodingType = 'UTF8';
  
    const [syntax] = await client.analyzeSyntax({document, encodingType});
  
    console.log('Tokens:');
    syntax.tokens.forEach(part => {
      console.log(`${part.partOfSpeech.tag}: ${part.text.content}`);
      //console.log('Morphology:', part.partOfSpeech);
    });

    return syntax
  }

// analyzeText("Jim sleeps. Mary is crying, she looks sad.").catch(console.error);
// analyzeSyntax("Jack Sparrow sleeps. Mary is crying, she looks sad.").catch(console.error);



module.exports = {analyzeText, analyzeSyntax}