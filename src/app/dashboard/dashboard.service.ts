import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { AuthService } from "../login/login.service";

@Injectable()
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getGames() {
    return this.httpClient.get(`${environment.rootURL}/api/v1/games`);
  }

  createGame() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        token: sessionStorage.getItem("token")
      })
    };

    return this.httpClient.post(
      `${environment.rootURL}/api/v1/games`,
      {},
      httpOptions
    );
  }

  getJoinableGames() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        token: sessionStorage.getItem("token")
      })
    };

    return this.httpClient.get(
      `${environment.rootURL}/api/v1/games`,
      httpOptions
    );
  }
}
