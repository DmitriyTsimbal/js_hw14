//Описати масив об'єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// назва компанії на час розробки (назву періодично змінюють)
// власник компанії
// спонсори (масив спонсорів)
//       * прізвище спонсора
//       * ім’я спонсора
//       * сума вкладень спонсора
// рік випуску
// вартість сайту
// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об'єктів, що містять сайти з вартість до 10000 і понад 10000

const websiteList = [
    {
        companyName: '404 Brain Not Found Web Development',
        companyOwner: 'Oleg',
        sponsorsList: [
            {
                sponsorName: 'Emily',
                sponsorSurname: 'Wilson',
                sponsorshipAmount: 11000
            },
            {
                sponsorName: 'Ethan',
                sponsorSurname: 'Lee',
                sponsorshipAmount: 11000
            },
            {
                sponsorName: 'Charlotte',
                sponsorSurname: 'Thompson',
                sponsorshipAmount: 15500
            },
            {
                sponsorName: 'Benjamin',
                sponsorSurname: 'Chen',
                sponsorshipAmount: 15000
            }
        ],
        releaseYear: 2003,
        websiteCost: 576000
    }, {
        companyName: '404 Brain Not Found Web Development',
        companyOwner: 'Oleg',
        sponsorsList: [
            {
                sponsorName: 'Jasmine',
                sponsorSurname: 'Patel',
                sponsorshipAmount: 561000
            },
            {
                sponsorName: 'Liam',
                sponsorSurname: 'Carter',
                sponsorshipAmount: 134000
            },
            {
                sponsorName: 'Isabella',
                sponsorSurname: 'Kim',
                sponsorshipAmount: 155400
            },
            {
                sponsorName: 'William',
                sponsorSurname: 'Zhang',
                sponsorshipAmount: 345000
            }
        ],
        releaseYear: 2008,
        websiteCost: 1371000
    }, {
        companyName: 'Pixel Pushers Anonymous',
        companyOwner: 'Joe',
        sponsorsList: [
            {
                sponsorName: 'Olivia',
                sponsorSurname: 'Butler',
                sponsorshipAmount: 646000
            },
            {
                sponsorName: 'Noah',
                sponsorSurname: 'Martin',
                sponsorshipAmount: 556000
            },
            {
                sponsorName: 'Chloe',
                sponsorSurname: 'Stewart',
                sponsorshipAmount: 187500
            },
            {
                sponsorName: 'Alexander',
                sponsorSurname: 'Campbell',
                sponsorshipAmount: 235000
            }
        ],
        releaseYear: 2015,
        websiteCost: 2573000
    }, {
        companyName: 'Pixel Pushers Anonymous',
        companyOwner: 'Joe',
        sponsorsList: [
            {
                sponsorName: 'Sophia',
                sponsorSurname: 'Taylor',
                sponsorshipAmount: 45000
            },
            {
                sponsorName: 'Daniel',
                sponsorSurname: 'Brown',
                sponsorshipAmount: 10000
            },
            {
                sponsorName: 'Ava',
                sponsorSurname: 'Lewis',
                sponsorshipAmount: 32500
            },
            {
                sponsorName: 'Jacob',
                sponsorSurname: 'Green',
                sponsorshipAmount: 5000
            }
        ],
        releaseYear: 2019,
        websiteCost: 3000
    }, {
        companyName: 'Code Monkeys R Us',
        companyOwner: 'Olga',
        sponsorsList: [
            {
                sponsorName: 'James',
                sponsorSurname: 'Anderson',
                sponsorshipAmount: 456000
            },
            {
                sponsorName: 'Isabelle',
                sponsorSurname: 'Garcia',
                sponsorshipAmount: 754000
            },
            {
                sponsorName: 'Benjamin',
                sponsorSurname: 'Wong',
                sponsorshipAmount: 652500
            },
            {
                sponsorName: 'Ava',
                sponsorSurname: 'Patel',
                sponsorshipAmount: 235000
            }
        ],
        releaseYear: 2022,
        websiteCost: 9000
    }
]

//1) Знайти загальну вартість усіх сайтів

const getTotalWebsiteCost = (websiteList) => {
    let totalWebsiteCost = 0;
    for (const website of websiteList) {
        totalWebsiteCost += website.websiteCost;
    }
    return totalWebsiteCost;
}

document.write(`Total websites cost: ${ getTotalWebsiteCost(websiteList) }₴<hr>`);


//2) Кількість сайтів, що було зроблено між 2000 та 2009 рр.

const getWebsitesCountCreatedBetweenYears = (websiteList, firstDate, secondDate) => {
    let websiteCount = 0;
    for (const website of websiteList) {
        if (website.releaseYear >= firstDate && website.releaseYear <= secondDate) {
            websiteCount++;
        }
    }
    return websiteCount;
}

document.write(`Total websites count created between years(2000-2009): ${ getWebsitesCountCreatedBetweenYears(websiteList, 2000, 2009) }<hr>`)


//3) Кількість сайтів, де сума спонсорських вкладень була більшою за 100000

const getWebsitesCountWithSponsorshipMoreThan100000 = (websiteList) => {
    let websiteCount = 0;
    let sponsorshipSum = 0;
    for (const website of websiteList) {
        for (const sponsor of website.sponsorsList) {
            sponsorshipSum += sponsor.sponsorshipAmount;
        }
        if (sponsorshipSum > 100000) {
            websiteCount++;
        }
        sponsorshipSum = 0;
    }
    return websiteCount;
}

document.write(`Websites count with sponsorship more than 100000: ${ getWebsitesCountWithSponsorshipMoreThan100000(websiteList) }<hr>`)


//4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
const getArrayWithSponsorsNames = (websiteList) => {
    const sponsorsArray = [];
    for (const website of websiteList) {
        for (const sponsor of website.sponsorsList) {
            sponsorsArray.push(`${ sponsor.sponsorName + ' ' + sponsor.sponsorSurname }`);
        }
    }
    return sponsorsArray;
}

document.write(`Sponsors names: ${ getArrayWithSponsorsNames(websiteList).join(', ') }<hr>`)

//5) Знайти рік, коли прибуток був найбільшим
// Прибуток?? Мається на увазі, сума спонсорства?

const getMaxSponsorshipProfitYear = (websiteList) => {
    let profit = 0;
    let sponsorshipSum = 0;
    let year;
    for (const website of websiteList) {
        for (const sponsor of website.sponsorsList) {
            sponsorshipSum += sponsor.sponsorshipAmount;
        }
        if (sponsorshipSum > profit) {
            profit = sponsorshipSum;
            year = website.releaseYear;
        }
        sponsorshipSum = 0;
    }
    return year;
}

document.write(`Max sponsorship profitable year: ${ getMaxSponsorshipProfitYear(websiteList) }<hr>`)

//6) Упорядкувати список за спаданням прибутку

//Using reduce
// const sortByProfitDecline = (websiteList) => {
//   return websiteList.sort((a,b) => {
//         const sumA = a.sponsorsList.reduce((total, sponsor) => total + sponsor.sponsorshipAmount,0)
//         const sumB = b.sponsorsList.reduce((total, sponsor) => total + sponsor.sponsorshipAmount,0)
//         return sumB - sumA
//         }
//     )
// }

//Using for of

const sortByProfitDecline = (websiteList) => {
    return websiteList.sort((a, b) => {
        let sumA = 0, sumB = 0;
        for (let sponsor of a.sponsorsList) {
            sumA += sponsor.sponsorshipAmount;
        }
        for (let sponsor of b.sponsorsList) {
            sumB += sponsor.sponsorshipAmount
        }
        return sumB - sumA;
    })
}

console.log(sortByProfitDecline(websiteList))

//7) Створити 2 окремих списки з копіями об'єктів, що містять сайти з вартість до 10000 і понад 10000

const sortByWebsiteCost = (websiteList) => {
    const lowPriceWebsite = [];
    const highPriceWebsite = [];
    for (let website of websiteList) {
        website.websiteCost <= 10000 ? lowPriceWebsite.push({...website}) : highPriceWebsite.push({...website});
    }
    return [lowPriceWebsite, highPriceWebsite];
}

let [lowPriceWebsite, highPriceWebsite] = sortByWebsiteCost(websiteList);

console.log(lowPriceWebsite, highPriceWebsite)