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
}
