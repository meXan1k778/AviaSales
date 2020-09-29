export default class TicketStore {
  async getSessionId() {
    const res = await fetch('https://aviasales-test-api.java-mentor.com/search');
    if (!res.ok) {
      throw new Error(`Could not fetch!!! recived status: ${res.status}`);
    }

    return res.json();
  }

  async getTickets(searchId) {
    const res = await fetch(`https://aviasales-test-api.java-mentor.com/tickets?searchId=${searchId}`);

    if (!res.ok) {
      throw new Error(`Could not fetch!!! recived status: ${res.status}`);
    }

    const result = await res.json();

    return result;
  }

  getFakeTickets = () => {
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
