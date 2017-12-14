import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos = [
            {
                id: 1,
                title: 'learn javascript',
                completed: true,
            },
            {
                id: 2,
                title: 'learn angular2',
                completed: false,
            },
            {
                id: 3,
                title: 'create app',
                completed: false,
            }
        ];

        return { todos };
    }
}