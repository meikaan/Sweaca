import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './models/user';

@Injectable()
export class UserService {
    private flowerdata;
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/api/users');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        return this.http.post('/api/users', user);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }
    setFlowerData(flowerdatas){
        this.flowerdata=flowerdatas;
    }
    getFlowerData(){
        return this.flowerdata;
    }

    // delete(id: number) {
    //     return this.http.delete('/api/users/' + id);
    // }

}