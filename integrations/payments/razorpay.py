class RazorpayGateway:
    """Payment-provider boundary; supply credentials through runtime configuration."""

    def create_order(self, amount_paise: int, currency: str = "INR") -> dict[str, str]:
        if amount_paise <= 0:
            raise ValueError("amount_paise must be greater than zero")
        raise NotImplementedError("Configure Razorpay credentials and SDK before use")
