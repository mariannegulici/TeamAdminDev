import { NgModule } from '@angular/core';
import { ApolloClient } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

const apolloClient = new ApolloClient();

export function provideClient(): ApolloClient {
  return apolloClient;
}

@NgModule({
    imports: [
        ApolloModule.forRoot(provideClient)
    ],
    exports: [
        ApolloModule
    ]
})
export class ApolloClientModule {}