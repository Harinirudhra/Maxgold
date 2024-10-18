// pages/index.js
import axios from 'axios';
import cheerio from 'cheerio';

export default function GoldRates({ rates }) {
    if (!rates || rates.length === 0) {
        return <div>No gold rates available at the moment.</div>;
    }

    return (
        <div>
            <h1>Gold Rates for {rates.date}</h1>
            <ul>
                <li>24K Gold (1 Gram): {rates.gold24KPerGram} INR</li>
                <li>24K Gold (8 Grams): {rates.gold24KPerSovereign} INR</li>
                <li>22K Gold (1 Gram): {rates.gold22KPerGram} INR</li>
                <li>22K Gold (8 Grams): {rates.gold22KPerSovereign} INR</li>
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    const url = 'https://www.livechennai.com/gold_silverrate.asp';
    let rates = {};

    try {
        // Fetch the HTML content of the page
        const { data } = await axios.get(url);

        // Load the HTML into cheerio
        const $ = cheerio.load(data);

        // Select the first row in the gold table (today's gold prices)
        const firstRow = $('table.gold-table tbody tr').first();

        // Extract data
        const date = firstRow.find('td').eq(0).text().trim();
        const gold24KPerGram = firstRow.find('td').eq(1).text().trim();
        const gold24KPerSovereign = firstRow.find('td').eq(2).text().trim();
        const gold22KPerGram = firstRow.find('td').eq(3).text().trim();
        const gold22KPerSovereign = firstRow.find('td').eq(4).text().trim();

        // Populate the rates object with the extracted data
        rates = {
            date,
            gold24KPerGram,
            gold24KPerSovereign,
            gold22KPerGram,
            gold22KPerSovereign,
        };
    } catch (error) {
        console.error('Error fetching gold rates:', error.message);
    }

    return {
        props: {
            rates,
        },
    };
}
