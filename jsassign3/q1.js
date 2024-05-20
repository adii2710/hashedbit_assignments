///////Filter states starting with 'M', 'A', 'U', 'K'/////////



const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
];


const filteredStates = states.filter(state => {
    const firstLetter = state.charAt(0).toUpperCase();
    return firstLetter === 'M' || firstLetter === 'A' || firstLetter === 'U' || firstLetter === 'K';
});

console.log(filteredStates);
