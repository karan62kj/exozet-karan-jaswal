// extract date,month,year if the date format is 'yyyy-mm-ddT..'
export default function(inputdate,extract='year')
{
    switch(extract)
    {
        case 'year': return inputdate.split('-')[0];
        case 'month':return inputdate.split('-')[1];
        case 'day': return inputdate.split('-')[2].slice(0,2);
        default: throw new Error('invalid inputs');
    }
}