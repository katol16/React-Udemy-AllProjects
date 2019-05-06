// Pamiętaj, że compomnent state i Redux, rozwiazują ten sam problem, tylko w inny sposób. Chodzi o zarządzanie state'em w apliakcji

// Instalujemy Redux za pomocą "yarn add redux@3.7.2"

// Do utworzenia Store
import { createStore } from 'redux';

// Musimy utworzyć stroe za pomocą funkcji createStore(, któ©a od razu sama się wywoła
// Funkcja ta musi dostać parametr, w naszym przypadku będzie to state z przypisaną do niego defaultowa wartością
// drugim paramterem bedzie action, tak żebysmy mogli korzystać z akcji
const store = createStore((state = { count: 0}, action) => {
   console.log('running');

   switch (action.type) {
       case "INCREMENT":
           const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
           return {
               count: state.count + incrementBy
           };
       case "DECREMENT":
           const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : -1;
           return {
               count: state.count - decrementBy
           };
       case "RESET":
           return {
               count: 0
           };
       case "SET":
           return {
               count: action.count
           };
       default:
           return state;
   }

   // Poniżej to samo tylko za pomocą if

   // if (action.type === "INCREMENT") {
   //     return {
   //         // zauważ, że tutaj nie robimy nic w stylu setState, tylko nadpisujemy sam obiekt
   //         // nie powinno się tutaj zmianiać bezpośrednio state lub action, po prostu użyjemy wartości state by przeliczyć nową wartość
   //         count: state.count + 1
   //     }
   // } else {
   //     return state;
   // }

});

// Poniżej metoda store.getState, która zwraca state ze store
// console.log(store.getState());

// Za pomocą Actions będziemy incrementować countera lub go zerować

// Actions - Object that gets sent to the store

// Aby zobaczyć store za każdym razem kiedy się zmeinia użyjemy store.subscribe
store.subscribe(() => {
    console.log(store.getState());
});

// Zauważymy, że dispatch spowoduje kolejne wywołanie store (za każdym razem jak użyjemy dispatch kolejny raz wyświetli się console.log z 'running')
store.dispatch(
    {
        // Piszemy typy z dużej - taka konwencja
        // 'type' musi być podany!
        // Oprócz type, mozesz wpisać ile chcesz key value pairs
        type: "INCREMENT",
        incrementBy: 15
    }
);

store.dispatch(
    {
        type: "RESET"
    }
);

store.dispatch(
    {
        type: "DECREMENT",
        decrementBy: 5
    }
);

store.dispatch(
    {
        type: "SET",
        count: 101
    }
);
