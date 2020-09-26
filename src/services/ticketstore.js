export default class TicketStore {
  getTickets = () => {
    return [
      {
        price: 20000,
        carrier: 's7noob',
        segments: [
          {
            origin: 'MSC',
            destination: 'GHK',
            date: '17th 21:40',
            stops: [],
            duration: 350,
          },
          {
            origin: 'MSC',
            destination: 'GQW',
            date: '17th 23:20',
            stops: [],
            duration: 200,
          },
        ],
      },
      {
        price: 35000,
        carrier: 's7noob',
        segments: [
          {
            origin: 'MSC',
            destination: 'GHK',
            date: '17th 21:40',
            stops: ['TUB'],
            duration: 180,
          },
          {
            origin: 'MSC',
            destination: 'GQW',
            date: '17th 23:20',
            stops: ['TPO', 'UYN'],
            duration: 200,
          },
        ],
      },
      {
        price: 14000,
        carrier: 's7noob',
        segments: [
          {
            origin: 'MSC',
            destination: 'GHK',
            date: '17th 21:40',
            stops: ['TUB', 'VAN'],
            duration: 220,
          },
          {
            origin: 'MSC',
            destination: 'GQW',
            date: '17th 23:20',
            stops: ['TPO', 'UYN'],
            duration: 200,
          },
        ],
      },
    ];
  };
}
