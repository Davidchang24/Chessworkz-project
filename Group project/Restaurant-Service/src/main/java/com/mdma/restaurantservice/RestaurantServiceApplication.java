package com.mdma.restaurantservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestaurantServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(RestaurantServiceApplication.class, args);
    }
}

// @Bean
// CommandLineRunner runner(RestaurantRepository repository) {
// return args -> {
// Restaurant restaurant = new Restaurant(
// "Steijn de pizza",
// new Menu(
// new ArrayList<Product>(
// Arrays.asList(
// new Product("Kaas soep", "Lekker kaas soepje", 4.50, ProductSize.Small,
// "soep", true),
// new Product("Kaas soep", "Lekker kaas soepje", 4.50, ProductSize.Small,
// "soep",true)
// )
// )
// )
// );
//
// repository.insert(restaurant);
// }
