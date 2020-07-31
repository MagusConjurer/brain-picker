import React, { Component } from "react";
import "./style.css";

class Share extends Component {
  render() {
    return (
<div class="share-btn" data-url="https://..." data-title="..." data-desc="...">
    <a class="btn-vk" data-id="vk"><i class="fab fa-vk"></i> VK</a>
    <a class="btn-facebook" data-id="fb"><i class="fab fa-facebook-square"></i> Facebook</a>
    <a class="btn-twitter" data-id="tw"><i class="fab fa-twitter"></i> Twitter</a>
    <a class="btn-telegram" data-id="tg"><i class="fab fa-telegram"></i> Telegram</a>
    <a class="btn-mail" data-id="mail"><i class="fas fa-at"></i> EMail</a>
</div>
    );
  }
}

export default Share;
