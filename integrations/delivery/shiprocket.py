class ShiprocketClient:
    """Delivery-provider boundary; implement token handling in the service layer."""

    def create_shipment(self, order: dict[str, object]) -> dict[str, object]:
        if not order:
            raise ValueError("order must not be empty")
        raise NotImplementedError("Configure Shiprocket credentials and API before use")
