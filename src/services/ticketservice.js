export default class TicketService {
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

  circleFetch(id, load, finish, dispatch) {
    this.getTickets(id)
      .then((data) => {
        dispatch(load(data.tickets));
        if (!data.stop) {
          return this.circleFetch(id, load, finish, dispatch);
        }
        return dispatch(finish());
      })
      .catch(() => this.circleFetch(id, load, finish, dispatch));
  }
}
